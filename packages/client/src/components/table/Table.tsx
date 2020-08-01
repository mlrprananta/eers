import React, { PropsWithChildren, ReactElement } from 'react'
import { Table as BTable } from 'react-bootstrap'

interface Props<T> {
  data?: T
}

export function GenericTable<T>(
  props: PropsWithChildren<Props<T>>,
): ReactElement<PropsWithChildren<Props<T>>> {
  return <BTable>{props.children}</BTable>
}
