# 리액트와 상태관리

- flux 패턴을 사용한 리덕스
- 간단한 지역 상태, props drilling을 피하려는 용도로 리덕스는 번거로움 (보일러 플레이트가 큼) -> context api가 이를 보완
- context는 리렌더링 이슈: context 하위 컴포넌트는 상태를 직접 참조하지 않아도 리렌더링됨 + 상태가 일부만 변경되어도 모두 리렌더링됨
- 이를 해결한 여러 상태관리 라이브러리: recoil, jotai, zuztand - 훅 지원 + 렌더링 이슈 해결 + **작은 단위의 상태 관리** 가능 (지역적으로 관리 가능 colocate 이점)
- 훅을 활용한 외부 상태 라이브러리: swr, react query - **key**를 통한 캐싱 처리

## flux 패턴

- action, dispatcher, store, view로 구성된 **단방향 데이터 흐름** 패턴
- event emitter 패턴 사용 (store, view)

### 참고

- [flux 패턴 컨셉](https://github.com/facebookarchive/flux/tree/main/examples/flux-concepts)

## 더 알아보기

- context의 리렌더링 문제
