export const useProject = () =>
  useState<{ id: number; title: string } | undefined>('selectedProject', () => undefined);
  
export const useSidebar = () => useState('isSidebarOpened', () => true);
