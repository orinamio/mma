import {
  ListRenderItemInfo,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';

type ItemT = {
  id: string | number; // add option for generic type
};

type ListItem = {
  item: ItemT;
  index: number;
};

export interface ProfileInfoListProps {
  /**
   * Handles profile info list scroll event
   */
  onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
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
  /**
   * initial number of items to render
   */
  initialNumToRender?: number | undefined;
}
