import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Questionnaires from "./views/Questionnaires.vue";
import SubmittedSurvey from "./views/SubmittedSurvey.vue";
import TemplatesDesigner from "./views/TemplatesDesigner.vue";
import QuestionnaireEdit from "./views/QuestionnaireEdit.vue";
import QuestionnaireView from "./views/QuestionnaireView.vue";
import TemplateEdit from "./views/TemplateEdit.vue";
import TemplateAdd from "./views/TemplateAdd.vue";
import Edit from "./views/Edit.vue";
import Auth from "./views/Auth.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: Auth
    },
    {
      path: "/edit/:id",
      name: "Edit",
      component: Edit
    },
    {
      path: "/questionnaires",
      name: "Questionnaires",
      component: Questionnaires
    },
    {
      path: "/templates-designer",
      name: "TemplatesDesigner",
      component: TemplatesDesigner
    },
    {
      path: "/template-edit/:id",
      name: "TemplateEdit",
      component: TemplateEdit
    },
    {
      path: "/template-add",
      name: "TemplateAdd",
      component: TemplateAdd
    },
    {
      path: "/submitted/:id",
      name: "submittedSurvey",
      component: SubmittedSurvey
    },
    {
      path: "/questionnary-edit",
      name: "QuestionnaryEdit",
      component: QuestionnaireEdit
    },
    {
      path: "/questionnaires/edit",
      name: "QuestionnaireView",
      component: QuestionnaireView
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
