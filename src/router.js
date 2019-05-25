import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Surveys from "./views/Surveys.vue";
import SubmittedSurvey from "./views/SubmittedSurvey.vue";
import QuestionnaireDesigner from "./views/QuestionnaireDesigner.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/surveys",
      name: "Surveys",
      component: Surveys
    },
    {
      path: "/questionnaireDesigner",
      name: "QuestionnaireDesigner",
      component: QuestionnaireDesigner
    },
    {
      path: "/submitted",
      name: "submittedSurvey",
      component: SubmittedSurvey
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
