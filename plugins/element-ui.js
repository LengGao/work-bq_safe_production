import Vue from 'vue'
import {
    Button,
    Input,
    Breadcrumb,
    BreadcrumbItem,
    Dialog,
    Backtop,
    Image,
    Skeleton,
    SkeletonItem,
    Table,
    TableColumn,
    Collapse,
    CollapseItem,
    Empty,
    Icon,
    Progress,
    Popover,
    Pagination,
    Rate,
    Tabs,
    TabPane,
    Avatar,
    Form,
    FormItem,
    Radio,
    RadioGroup,
    Upload,
    Carousel,
    CarouselItem

} from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
//按需加载组件
const components = [
    Empty,
    Button,
    Input,
    Breadcrumb,
    BreadcrumbItem,
    Dialog,
    Backtop,
    Image,
    Skeleton,
    SkeletonItem,
    Table,
    TableColumn,
    Collapse,
    CollapseItem,
    Icon,
    Progress,
    Popover,
    Pagination,
    Rate,
    Tabs,
    TabPane,
    Avatar,
    Form,
    FormItem,
    Radio,
    RadioGroup,
    Upload,
    Carousel,
    CarouselItem
];

const Element = {
    install(Vue) {
        components.forEach(component => {
            Vue.component(component.name, component)
        })
    }
}
Vue.use(Element, { locale })
