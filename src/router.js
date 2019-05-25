import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Questionnaires from "./views/Questionnaires.vue";
import SubmittedSurvey from "./views/SubmittedSurvey.vue";
import TemplatesDesigner from "./views/TemplatesDesigner.vue";
import QuestionnaireEdit from "./views/QuestionnaireEdit.vue";
import TemplateEdit from "./views/TemplateEdit.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
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
      path: "/template-edit",
      name: "TemplateEdit",
      component: TemplateEdit
    },
    {
      path: "/submitted",
      name: "submittedSurvey",
      component: SubmittedSurvey
    },
    {
      path: "/questionnary-edit",
      name: "QuestionnaryEdit",
      component: QuestionnaireEdit
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
