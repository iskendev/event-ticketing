import { createRouter, createMemoryHistory } from "vue-router";
import Page1 from "@/components/page1.vue";
import Page2 from "@/components/page2.vue";
import Page3 from "@/components/page3.vue";
import Page4 from "@/components/page4.vue";
import Page5 from "@/components/page5.vue";
import Page6 from "@/components/page6.vue";
import Page7 from "@/components/page7.vue";
import Page8 from "@/components/page8.vue";
import Page9 from "@/components/page9.vue";
import Page10 from "@/components/page10.vue";

const router = createRouter({
	history: createMemoryHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/page1",
			component: Page1,
		},
		{
			path: "/page2",
			component: Page2,
		},
		{
			path: "/page3",
			component: Page3,
		},
		{
			path: "/page4",
			component: Page4,
		},
		{
			path: "/page5",
			component: Page5,
		},
		{
			path: "/page6",
			component: Page6,
		},
		{
			path: "/page7",
			component: Page7,
		},
		{
			path: "/page8",
			component: Page8,
		},
		{
			path: "/page9",
			component: Page9,
		},
		{
			path: "/page10",
			component: Page10,
		},
	],
});

export default router;
