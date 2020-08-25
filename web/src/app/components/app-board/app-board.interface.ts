import { Observable } from 'rxjs';

import { BoardItem, CardItem } from 'src/common/models';

export interface AppBoardComponentInterface {
  boardItem: BoardItem;
  cardList: Observable<CardItem[]>;
}
