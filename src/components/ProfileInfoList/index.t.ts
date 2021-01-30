import { ListRenderItemInfo } from 'react-native';

type ItemT = {
  id: string | number; // add option for generic type
};

type ListItem = {
  item: ItemT;
  index: number;
};

export interface ProfileInfoListProps {
  /**
   * Current active profile index
   */
  activeIndex: number;
  /**
   * Function to update active profile index
   */
  setActiveIndex: (index: number) => void;
  /**
   * Data array. Objects  must include "id" key-pair
   */
  data: ReadonlyArray<ItemT> | null | undefined;
  /**
   * Takes an item from data and renders it into the list. Typical usage:
   * ```
   * _renderItem = ({item}) => (
   *   <TouchableOpacity onPress={() => this._onPress(item)}>
   *     <Text>{item.title}</Text>
   *   <TouchableOpacity/>
   * );
   * ...
   * <FlatList data={[{title: 'Title Text', key: 'item1'}]} renderItem={this._renderItem} />
   * ```
   * Provides additional metadata like `index` if you need it.
   */
  renderItem: ListRenderItemInfo<ListItem> | null | undefined;
}
