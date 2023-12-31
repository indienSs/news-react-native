import ScreenLayout from '../layouts/ScreenLayout';
import {useCallback, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {selectLoggedIn} from '../redux/reducers/appReducer';
import {useAppDispatch} from '../redux/store';
import {fetchNews, selectNews} from '../redux/reducers/newsReducer';
import NewsItem from '../components/NewsItem';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function NewsScreen({navigation}: any) {
  const logged = useSelector(selectLoggedIn);
  const news = useSelector(selectNews);
  const appDispatch = useAppDispatch();

  const callbacks = {
    //Переход на экран просмотра информации о новости
    pressHandler: useCallback((newsId: number) => {
      navigation.navigate('SingleNewsScreen', {id: newsId});
    }, []),
  };

  useEffect(() => {
    appDispatch(fetchNews());
    if (!logged) {
      navigation.navigate('LoginScreen');
    }
  }, [logged]);

  return (
    <ScreenLayout>
      {news.map(element => (
        <NewsItem
          newsInfo={element}
          navigateToSingleNews={callbacks.pressHandler}
        />
      ))}
    </ScreenLayout>
  );
}
