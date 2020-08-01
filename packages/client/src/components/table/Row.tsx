import React, { PropsWithChildren, ReactElement } from 'react'

export function Row(
  props: PropsWithChildren<{}>,
): ReactElement<PropsWithChildren<{}>> {
  return <tr>{props.children}</tr>
}
