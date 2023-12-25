/* импортируем функции:
configureStore- функция, которая позволяет создать (store) для управления состоянием приложения
combineReducers- функция, которая объединяет несколько reducers в один reducer, который может быть использован для создания store */
import { configureStore, combineReducers } from '@reduxjs/toolkit';

/*
импортируем функции: persistStore, persistReducer

импортируем константы: FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER
- FLUSH: Это действие указывает, что необходимо сбросить все изменения в хранилище 
на постоянное хранилище (например, в localStorage). Это может быть полезно, 
если вы хотите сохранить все изменения в хранилище перед выгрузкой приложения 
или выполнением других действий.
- REHYDRATE: Это действие указывает, что необходимо восстановить состояние хранилища из 
постоянного хранилища (например, из localStorage) после перезагрузки приложения 
или восстановления из другого источника.
- PAUSE: Это действие указывает, что необходимо приостановить персистентное сохранение 
состояния хранилища. Это может быть полезно, если вы временно не хотите 
сохранять изменения в постоянное хранилище.
- PERSIST: Это действие указывает, что необходимо возобновить персистентное 
сохранение состояния хранилища после его приостановки.
- PURGE: Это действие указывает, что необходимо очистить все данные из постоянного хранилища. 
Это может быть полезно, если вы хотите выполнить полную очистку данных, например, 
при выходе пользователя из приложения.
- REGISTER: Это действие указывает, что необходимо зарегистрировать персистентный 
reducer в контексте персистентного хранилища.
*/
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// импортируем модуль, который предоставляет доступ к хранилищу для сохранения состояния Redux
import storage from 'redux-persist/lib/storage';
// импортируем slice (часть) состояния и действий для модальной формы
import recipeCatalogData from './slices/recipeCatalogSlice';
import modalFormSlice from './slices/modalFormSlice';

/* объединяет нескольких reducers в один корневой reducer
любой новый reducer добавляется сюда, как ключ значение */
const rootReducer = combineReducers({
  recipeCatalogData: recipeCatalogData,
  modalFormSlice: modalFormSlice,
});

/* Создаем конфигурацию для (Redux Persist), 
где указывается ключ key и используемое хранилище storage. 
В данном случае, используется хранилище storage, 
которое, представляет собой localStorage */
const persistConfig = {
  key: 'root',
  storage: storage,
};

/* Создаем персистентный reducer на основе корневого reducer и конфигурации персистентного хранения. 
Этот персистентный reducer можно использовать при создании хранилища Redux
с помощью функции configureStore из (Redux Toolkit),
чтобы сохранять состояние хранилища между сеансами работы приложения */
const persistedReducer = persistReducer(persistConfig, rootReducer);

/* Создаем хранилище Redux с использованием функции configureStore из Redux Toolkit
В данном случае, в качестве редьюсера (reducer) используется persistedReducer, 
который представляет собой персистентный reducer, созданный с помощью функции 
persistReducer из библиотеки redux-persist */
const store = configureStore({
  reducer: persistedReducer,
  /*
  Создадим конфигурацию middleware для использования вместе с Redux и библиотекой redux-persist
  -(функция getDefaultMiddleware), предоставляемая Redux Toolkit, 
  которая возвращает стандартный набор middleware, включая middleware 
  для обработки action creators, thunk middleware и другие
  -(опция serializableCheck), которая может быть передана в getDefaultMiddleware 
  для настройки проверки сериализуемости (serializability check) для состояния Redux. 
  Это полезно для обнаружения несериализуемых значений в состоянии, которые могут 
  вызвать проблемы при использовании redux-persist для сохранения 
  состояния в постоянное хранилище
  -(указываем, что нужно игнорировать ignoredActions)
  ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]: 
  проверку сериализуемости для определенных действий. 
  Эти действия (FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER) связаны 
  с персистентным хранилищем redux-persist и не должны вызывать предупреждения
  о несериализуемых значениях
  */
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export const persister = persistStore(store);
export default store;
