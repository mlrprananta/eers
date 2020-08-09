import React, { PropsWithChildren, ReactElement } from 'react'

interface Props<T> {}

export function Header<T>(
  props: PropsWithChildren<Props<T>>,
): ReactElement<PropsWithChildren<Props<T>>> {
  return (
    <thead>
      <tr>{props.children}</tr>
    </thead>
  )
}
