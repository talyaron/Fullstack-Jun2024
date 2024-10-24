import { dashboard } from '../view/pages/dashboard/dashboard';
import { coursesPage } from '../view/pages/courses/coursesPage';


export function navigation():string {
    const queryString = window.location.search;
    const params:any = new URLSearchParams(queryString);
    let page:string = '';
    const dashboardParam = params.get('dashboardParam');
    const coursesParam = params.get('coursesParam');

    switch (true) {
        case dashboardParam !== null:
            page = dashboard();
            break;
        case coursesParam !== null:
            console.log('in courses page');
            page = coursesPage();
            break;
        default:
            page = dashboard();
            break;
    }
    return page;
};
