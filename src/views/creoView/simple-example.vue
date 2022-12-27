<template>
	<div class="content">
    <div class="toolbar-container">
      <el-switch
        v-model="switchValue"
        @change="switchChange"
        active-text="加载模型"
        inactive-text="删除模型">
      </el-switch>
      </div>
      <div class="view-container">
          <div id="CreoViewWebGLDiv" style="width: 100%; height: 100%; border: 0; margin: auto"></div>
      </div>
	</div>
</template>

<script>
import { loadJs } from "@/plugins/utils"
// 主要使用thingview文件
export default {
	data() {
		return {
      app: '',
      session: '',
      model: '',
      switchValue: true
		}
	},
	mounted() {
    loadJs("/thingview/thingview.js").then(() => {
      ThingView.init("thingview", () => {
        if (this.switchValue) {
          this.startThingView()
        }        
      })
    })    
	},
	methods: {
    startThingView() {
      ThingView.SetDefaultSystemPreferences(Module.ApplicationType.CREOVIEW);
      console.log("Creo View WebGL Viewer is now initialized");
      this.app = ThingView.CreateCVApplication("CreoViewWebGLDiv");
      this.session = this.app.GetSession();
      this.session.LoadStructNodeWithURL1("/thingview/sample-data/Fishing_Reel/fishing_reel.pvs", true, Module.ExpandThumbnails.COMPLETELY,
          (structNode, errors) => {
              const shapeScene = this.session.MakeShapeScene(true);
              const shapeView = shapeScene.MakeShapeView(
                  document.getElementById("CreoViewWebGLDiv").childNodes[0].id,
                  true
              );
              this.model = shapeScene.MakeModel();
              this.model.LoadStructNode(structNode, true, true,
                  (success, isStructure, errorStack) => {
                      console.log(
                          "Model LoadFromURLWithCallback - success: " +
                          success +
                          ", isStructure: " +
                          isStructure
                      );
                  }
              );
              // 在使用完ThingView对象后，清理它们的局部引用。
              shapeScene.delete();
              shapeView.delete();
          }
      );
    },
    cleanupThingView() {
        ThingView.DestroyApplication(this.app);
        /**
         * 在不删除对ThingView对象的本地引用的情况下销毁应用程序将会泄漏内存
         */
        this.app.delete();
        this.app = null;
        this.session.delete();
        this.session = null;
        this.model.delete();
        this.model = null;
    },
    switchChange(value) {
      if (value) {
        this.startThingView()
      } else {
        this.cleanupThingView()
      }
    }
	}
}
</script>

<style lang="scss" scoped>
.view-container {
  width: 100%;
  height: calc(100% - 23px)
}
</style>