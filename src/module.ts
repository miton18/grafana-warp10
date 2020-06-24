
import { DataSourceInstanceSettings, MetricFindValue, DataQueryRequest, DataQueryResponse, MutableDataFrame, DataSourceApi } from '@grafana/data';
import { DataSourcePlugin } from '@grafana/data'
import { DataSourceWithBackend } from '@grafana/runtime';
import { DataQuery, DataSourceJsonData } from '@grafana/data'
import { Observable } from 'rxjs';

class DataSource extends DataSourceApi {
  constructor(private instanceSettings: DataSourceInstanceSettings<Warp10Options>) {
    super(instanceSettings);
  }

  async query(request: DataQueryRequest<Warp10Query>): Promise<DataQueryResponse> {
    const { range } = request
    const from = range!.from.valueOf()
    const to = range!.to.valueOf()

    const data = request.targets.map(target => {
      // Your code goes here.
    })

    return {data}
  }

  async metricFindQuery?(query: any, options?: any): Promise<MetricFindValue[]> {
    return Promise.resolve([]);
  }

  async testDatasource() {

  }
}

interface Warp10Query extends DataQuery {
    query?: string;
    options?: Warp10Options;
  }

interface Warp10Options extends DataSourceJsonData {
    organization?: string;
    defaultBucket?: string;
    maxSeries?: number;
  }

interface InfluxSecureJsonData {
    token?: string;
  }

export const plugin = new DataSourcePlugin<DataSource, Warp10Query, Warp10Options>(DataSource)
  //.setConfigEditor(ConfigEditor)
  //.setQueryEditor(QueryEditor);