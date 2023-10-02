import { BoardCardProps } from '~/components/Boards/Card.vue';
import { Boards } from '~/pages/boards.vue';

export type BoardCard = {
  id: number;
  task: string;
  title: string;
  userName: string;
  idx: number;
  userAvatar?: string | null;
};

type Bounding = {
  x?: number;
  y?: number;
  width: number;
  height: number;
};

export const useProject = () =>
  useState<{ id: number; title: string } | undefined>('selectedProject', () => undefined);

export const useSidebar = () => useState('isSidebarOpened', () => true);

export const useDraggedElement = () =>
  useState<BoardCard & Bounding | undefined>('draggedElementId', () => undefined);

export const useSelectedCard = () => useState<BoardCardProps | undefined>('selectedCard', () => undefined)
export const useSelectedBoard = () =>
  useState<number | undefined>('selectedBoard', () => undefined);

export const useBoards = () =>
  useState<Boards[]>('boards', () => {
    return [
      {
        id: 1,
        title: 'New',
        icon: 'ph:seal-warning',
        cards: [
          {
            id: 1,
            boardId: 1,
            idx: 0,
            task: 'featur #1204',
            title: 'bebra bebra',
            userName: 'bebra'
          },
          {
            id: 2,
            boardId: 1,
            idx: 1,
            task: 'bug #1211',
            title: 'bug baaaarrraaaaaa',
            userName: 'Sergey Bondar'
          }
        ]
      },
      {
        id: 2,
        title: 'In progress',
        icon: 'ph:clock',
        cards: [
          {
            id: 5,
            boardId: 2,
            idx: 0,
            task: 'featur #23',
            title: 'bebra bsfsdfsdfsebra',
            userName: 'bebra'
          },
          {
            id: 7,
            boardId: 2,
            idx: 1,
            task: 'bsdfsdug #121fsd1',
            title: 'fsfsfbug baaasdfsdarrraaaaaa',
            userName: 'Sergey'
          }
        ]
      }
    ];
  });
