export const useProject = () => useState('selectedProject', () => ({ id: 0, title: '' }));
export const useSidebar = () => useState('isSidebarOpened', () => true)