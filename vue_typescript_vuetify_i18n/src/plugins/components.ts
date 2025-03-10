import Vue from 'vue'

/* select locale */
import HeaderComponent from '@/components/header/TheHeader.component.vue'
import SelectLocale from '@/components/select-locale/TheSelectLocale.component.vue'
import FooterComponent from '@/components/footers/basdepage.component.vue'
import ProjectBottom from '@/components/ProjectBottomSheet/ProjectBottom.component.vue'

import HeaderComponentPro from '@/components/header/TheHeaderPro.component.vue'
import HeaderComponentPart from '@/components/header/TheHeaderParticulier.component.vue'
import HeaderComponentProjets from '@/components/header/TheHeaderProjets.component.vue'

/* Import Projet */
import CardsProjects from '@/components/cards-projects/CardsProjects.component.vue'
import CardsProjectsPresentation from '@/components/cards-projects/CardsProjectsPresentation.component.vue'
import CardsProjectsSlide from '@/components/cards-projects/CardsProjectsSlide.component.vue'

import HomeCover from '@/components/home-cover/HomeCover.component.vue'
import PresentationHomePage from '@/components/presentation-home-page/PresentationHomePage.component.vue'
import Contacts from '@/components/contacts/contacts.component.vue'
import Prestations from '@/components/prestations/Prestations.component.vue'

/* Import Projet Page Pro */
import PresentationHomePagePro from '@/components/presentation-home-page/PresentationHomePagePro.component.vue'
import HomeCoverPro from '@/components/home-cover/HomeCoverPro.component.vue'
import ContactsPro from '@/components/contacts/contactsProf.component.vue'
import PrestationsPro from '@/components/prestations/PrestationsPro.component.vue'

/* Import Projet Page Particulier */
import ContactsPart from '@/components/contacts/contactsPart.component.vue'
import PrestationsPart from '@/components/prestations/PrestationsPart.component.vue'

/* Import Projet Sheet
import Project100 from '@/components/projects-all-details/Project100.component.vue'
import Project120 from '@/components/projects-all-details/Project120.component.vue'
import Project130 from '@/components/projects-all-details/Project130.component.vue'
import Project140 from '@/components/projects-all-details/Project140.component.vue'
import Project150 from '@/components/projects-all-details/Project150.component.vue'
import Project160 from '@/components/projects-all-details/Project160.component.vue' */

/* Import Text Anim */
import textAnimp from '@/components/textAnimp/TextAnim.component.vue'
import textAnimpPro from '@/components/textAnimp/TextAnimPro.component.vue'

Vue.component('pf-header', HeaderComponent)
Vue.component('pf-locale', SelectLocale)
Vue.component('pf-Footer', FooterComponent)
Vue.component('pf-Project', ProjectBottom)

Vue.component('pf-header-pro', HeaderComponentPro)
Vue.component('pf-header-part', HeaderComponentPart)
Vue.component('pf-header-projets', HeaderComponentProjets)

/* Component Projet Sheet */
Vue.component('pf-CardsProjects', CardsProjects)
Vue.component('pf-CardsProjectsPresentation', CardsProjectsPresentation)
Vue.component('pf-CardsProjectsSlide', CardsProjectsSlide)

Vue.component('pf-HomeCover', HomeCover)
Vue.component('pf-PresentationHomePage', PresentationHomePage)
Vue.component('pf-Contacts', Contacts)
Vue.component('pf-Prestations', Prestations)

/* Component Projet Page pro */
Vue.component('pf-PresentationHomePagePro', PresentationHomePagePro)
Vue.component('pf-HomeCoverPro', HomeCoverPro)
Vue.component('pf-ContactsPro', ContactsPro)
Vue.component('pf-PrestationsPro', PrestationsPro)

/* Component Projet Page pro */
Vue.component('pf-ContactsPart', ContactsPart)
Vue.component('pf-PrestationsPart', PrestationsPart)

/* Component Projet Sheet
Vue.component('pf-Project100', Project100)
Vue.component('pf-Project120', Project120)
Vue.component('pf-Project130', Project130)
Vue.component('pf-Project140', Project140)
Vue.component('pf-Project150', Project150)
Vue.component('pf-Project160', Project160) */

/* Component Text Anim */
Vue.component('pf-TextAnim', textAnimp)
Vue.component('pf-TextAnimPro', textAnimpPro)
