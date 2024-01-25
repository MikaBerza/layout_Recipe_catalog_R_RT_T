/* Для useDispatch типа по умолчанию Dispatch ничего не известно о thunks 
или другом промежуточном программном обеспечении. Чтобы корректно отправлять пакеты thunks, 
вам необходимо использовать определенный настроенный AppDispatch тип из магазина, 
который включает типы промежуточного программного обеспечения thunk, 
и использовать его с useDispatch. Добавление предварительно введенного 
useDispatch хука не позволит вам забыть импортировать AppDispatch туда, 
где это необходимо.

Замена useDispatch на useAppDispatch необходима для явного указания типа диспетчера. 
При использовании useDispatch, TypeScript не всегда понимает тип диспетчера, 
что может привести к ошибкам типизации.
С помощью создания типа AppDispatch и замены useDispatch на useAppDispatch 
мы объявляем явный тип диспетчера, что помогает TypeScript корректно 
определять типы и предотвращать ошибки в работе. */

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
