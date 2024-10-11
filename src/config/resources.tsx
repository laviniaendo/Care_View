import type { IResourceItem } from "@refinedev/core";

import {
  CalendarOutlined,
  ContainerOutlined,
  CrownOutlined,
  DashboardOutlined,
  ProjectOutlined,
  ShopOutlined,
  TeamOutlined,
} from "@ant-design/icons";

export const resources: IResourceItem[] = [
  {
    name: "dashboard",
    list: "/",
    meta: {
      label: "Dashboard",
      // @ts-expect-error Ant Design Icon's v5.0.1 has an issue with @types/react@^18.2.66
      icon: <DashboardOutlined />,
    },
  },
  {
    name: "events",
    list: "/calendar",
    create: "/calendar/create",
    edit: "/calendar/edit/:id",
    show: "/calendar/show/:id",
    meta: {
      label: "Calendário",
      // @ts-expect-error Ant Design Icon's v5.0.1 has an issue with @types/react@^18.2.66
      icon: <CalendarOutlined />,
    },
  },
  {
    name: "scrumboard",
    meta: {
      label: "Scrumboard",
      // @ts-expect-error Ant Design Icon's v5.0.1 has an issue with @types/react@^18.2.66
      icon: <ProjectOutlined />,
    },
  },

  {
    name: "tasks",
    list: "/scrumboard/kanban",
    create: "/scrumboard/kanban/create",
    edit: "/scrumboard/kanban/edit/:id",
    meta: {
      label: "Kanban",
      parent: "scrumboard",
    },
  },
  {
    name: "taskStages",
    create: "/scrumboard/kanban/stages/create",
    edit: "/scrumboard/kanban/stages/edit/:id",
    list: "/scrumboard/kanban",
    meta: {
      hide: true,
    },
  },
  {
    name: "deals",
    identifier: "finalize-deals",
    edit: "/scrumboard/sales/:id/finalize",
    meta: {
      hide: true,
    },
  },
  {
    name: "dealStages",
    create: "/scrumboard/sales/stages/create",
    edit: "/scrumboard/sales/stages/edit/:id",
    list: "/scrumboard/sales",
    meta: {
      hide: true,
    },
  },
  {
    name: "companies",
    list: "/companies",
    show: "/companies/:id",
    create: "/companies/create",
    edit: "/companies/edit/:id",
    meta: {
      label: "Incubadoras",
      // @ts-expect-error Ant Design Icon's v5.0.1 has an issue with @types/react@^18.2.66
      icon: <ShopOutlined />,
    },
  },
  {
    name: "companies",
    identifier: "sales-companies",
    create: "/scrumboard/sales/create/company/create",
    meta: {
      hide: true,
    },
  },
  {
    name: "contacts",
    list: "/contacts",
    create: "/contacts/create",
    edit: "/contacts/edit/:id",
    show: "/contacts/show/:id",
    meta: {
      label: "Profissionais da Saúde",
      // @ts-expect-error Ant Design Icon's v5.0.1 has an issue with @types/react@^18.2.66
      icon: <TeamOutlined />,
    },
  },
  {
    name:"ChatBot",
    list:"/IA",
    create: "/IA/Create",
  },
  {
    name: "administration",
    meta: {
      label: "Administração",
      // @ts-expect-error Ant Design Icon's v5.0.1 has an issue with @types/react@^18.2.66
      icon: <CrownOutlined />,
    },
  },
  {
    name: "settings",
    list: "/administration/settings",
    meta: {
      label: "Configuração",
      parent: "administration",
    },
  },
  {
    name: "audits",
    list: "/administration/audit-log",
    meta: {
      label: "Audit Log",
      parent: "administration",
    },
  },
];
