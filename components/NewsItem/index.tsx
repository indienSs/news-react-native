import {ReactNode} from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {NewsType} from '../../types/NewsType';

interface INewsItem {
  newsInfo: NewsType;
  navigateToSingleNews: (newsId: number) => void;
}

export default function NewsItem({newsInfo, navigateToSingleNews}: INewsItem) {
  return (
    <TouchableOpacity
      style={styles.NewsItem}
      onPress={() => navigateToSingleNews(newsInfo.id)}>
      <Image source={newsInfo.image_url} />
      <Text>{newsInfo.title}</Text>
      <Text>{newsInfo.short_text}</Text>
    </TouchableOpacity>
  );
}
