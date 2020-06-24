import React from 'react'
import { ExploreQueryFieldProps } from '@grafana/data'
import { QueryField } from '@grafana/ui'
import DataSource from './warp10-datasource'

export type Props = ExploreQueryFieldProps<DataSource, any, any>

export default (props: Props) => {
  return <h2>My query editor</h2>
}