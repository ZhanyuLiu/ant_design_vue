<template>
  <a-locale-provider :locale="locale"><!--    国际化中文-->
    <div class="demo">
      <new_d/>
      <a-table :locale="locale" :columns="columns" :data-source="data" :pagination="pagination" bordered>
        <template
                v-for="col in ['conid', 'conname', 'consign','preservepeople','linkhome','preservetime']"
                :slot="col"
                slot-scope="text, record"
        >
          <div :key="col">
            <a-input
                    v-if="record.editable"
                    style="margin: -5px 0"
                    :value="text"
                    @change="e => handleChange(e.target.value, record.key, col)"
            />
            <template v-else>{{text}}</template>
          </div>
        </template>
        <template slot="operation" slot-scope="text, record">
          <div class="editable-row-operations">
            <span v-if="record.editable">
              <a @click="() => save(record.key)">保存</a>
              <a-popconfirm title="确定要退出吗?" @confirm="() => cancel(record.key)">
                <a>退出</a>
              </a-popconfirm>
            </span>
            <span v-else>
              <a @click="() => draw()">绘图</a>
              <a>|</a>
              <a @click="() => edit(record.key)">修改</a>
              <a>|</a>
              <a-popconfirm  title="确定要删除吗?" @confirm="() => onDelete(record.key)">
              <a href="javascript:;">删除</a>
              </a-popconfirm>
              <a>|</a>
              <a @click="() => copy()">复制</a>
            </span>
          </div>
        </template>
      </a-table>
    </div>
  </a-locale-provider>
</template>


<script>
  import new_d from '../components/new_d.vue'
  // import  {Pagination,LocaleProvider} from 'ant-design-vue'
  import  zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'

  const columns = [
    {
      title: '组态图ID',
      dataIndex: 'conid',
      scopedSlots: { customRender: 'conid' },
    },
    {
      title: '组态图名称',
      dataIndex: 'conname',
      scopedSlots: { customRender: 'conname' },
    },
    {
      title: '组态图类型',
      dataIndex: 'consign',
      scopedSlots: { customRender: 'consign' },
    },
    {
      title: '关联配电室',
      dataIndex: 'linkhome',
      scopedSlots: { customRender: 'linkhome' },
    },
    {
      title: '配置人员',
      dataIndex: 'preservepeople',
      scopedSlots: { customRender: 'preservepeople' },
    },
    {
      title: '配置时间',
      dataIndex: 'preservetime',
      scopedSlots: { customRender: 'preservetime' },
    },
    {
      title: '操作',
      dataIndex: 'operation',
      scopedSlots: { customRender: 'operation' },
    },
  ];

  const data = [
    {
      key: '1',
      conid: 11009001,
      conname: '标准版通用组态图5-副本',
      consign: '配电运维-标准通用版',
      linkhome:'——' ,
      preservepeople: '张某某',
      preservetime: '2019-9-30'
    },
    {
      key: '2',
      conid: 11009002,
      conname: '简化版通用组态图10',
      consign: '配电运维-标准通用版',
      linkhome:'——' ,
      preservepeople: '张某某',
      preservetime: '2019-9-30'
    },
    {
      key: '3',
      conid: 11009003,
      conname: '标准版通用组态图5',
      consign: '配电运维-标准通用版',
      linkhome:'总部基地4区4号楼配电室' ,
      preservepeople: '张某某',
      preservetime: '2019-9-30'
    },
    {
      key: '4',
      conid: 11009004,
      conname: '标准版通用组态图4',
      consign: '配电运维-标准通用版',
      linkhome:'总部基地4区3号楼配电室' ,
      preservepeople: '张某某',
      preservetime: '2019-9-30'
    },
    {
      key: '5',
      conid: 11009005,
      conname: '高级版通用组态图8',
      consign: '配电运维-高级通用版',
      linkhome:'管庄华联商厦1号配电室' ,
      preservepeople: '张某某',
      preservetime: '2019-9-30'
    },
    {
      key: '6',
      conid: 11009006,
      conname: '高级版通用组态图7',
      consign: '配电运维-高级通用版',
      linkhome:'管庄华联商厦2号配电室' ,
      preservepeople: '张某某',
      preservetime: '2019-9-30'
    },
    {
      key: '7',
      conid: 11009007,
      conname: '黄庄小区1号配电室组态图',
      consign: '配电运维-定制单图版',
      linkhome:'黄庄小区1号配电室' ,
      preservepeople: '张某某',
      preservetime: '2019-9-30'
    },
    {
      key: '8',
      conid: 11009008,
      conname: '连云港第一医院1号配电室1分图',
      consign: '配电运维-定制多图版',
      linkhome:'连云港第一医院1号配电室' ,
      preservepeople: '张某某',
      preservetime: '2019-9-30'
    },
    {
      key: '9',
      conid: 11009009,
      conname: '连云港第一医院1号配电室2分图',
      consign: '配电运维-定制多图版',
      linkhome:'连云港第一医院1号配电室' ,
      preservepeople: '张某某',
      preservetime: '2019-9-30'
    },
    {
      key: '10',
      conid: 11009010,
      conname: '连云港第一医院1号配电室3分图',
      consign: '配电运维-定制多图版',
      linkhome:'连云港第一医院1号配电室' ,
      preservepeople: '张某某',
      preservetime: '2019-9-30'
    },
    {
      key: '11',
      conid: 11009011,
      conname: '连云港第一医院1号配电室1分图',
      consign: '配电运维-定制多图版',
      linkhome:'连云港第一医院1号配电室' ,
      preservepeople: '张某某',
      preservetime: '2019-9-30'
    },
    {
      key: '12',
      conid: 11009012,
      conname: '高级版通用组态图8',
      consign: '配电运维-高级通用版',
      linkhome:'管庄华联商厦1号配电室' ,
      preservepeople: '张某某',
      preservetime: '2019-9-30'
    },
  ];
  export default {
    name: 'demo',
    data: function () {
      this.cacheData = data.map(item => ({...item}));
      return {
        data,
        columns,
        locale:zhCN,
        pagination: {
          showTotal: total => `共 ${total} 条`, // 显示总数
          showQuickJumper: true, // 是否可以快速跳转至某页
          showSizeChanger: true,
          pageSizeOptions: ['5', '10', '15', '20'],
          onShowSizeChange: (current, pageSize) => this.pageSize = pageSize,
        }
      };
    },
      components: {
          new_d
      },
      methods: {
        handleChange(value, key, column) {
          const newData = [...this.data];
          const target = newData.filter(item => key === item.key)[0];
          if (target) {
            target[column] = value;
            this.data = newData;
          }
        },
        edit(key) {
          const newData = [...this.data];
          const target = newData.filter(item => key === item.key)[0];
          if (target) {
            target.editable = true;
            this.data = newData;
          }
        },
        save(key) {
          const newData = [...this.data];
          const target = newData.filter(item => key === item.key)[0];
          if (target) {
            delete target.editable;
            this.data = newData;
            this.cacheData = newData.map(item => ({ ...item }));
          }
        },
        cancel(key) {
          const newData = [...this.data];
          const target = newData.filter(item => key === item.key)[0];
          if (target) {
            Object.assign(target, this.cacheData.filter(item => key === item.key)[0]);
            delete target.editable;
            this.data = newData;
          }
        },
        onCellChange(value, key, column) {
          const dataSource = [...this.data];
          const target = dataSource.find(item => item.key === key);
          if (target) {
            target[column] = value;
            this.data = dataSource;
          }
        },
        onDelete(key) {
          const dataSource = [...this.data];
          this.data = dataSource.filter(item => item.key !== key);
        },
      },
  }
</script>

<style scoped lang="less">
    /*.editable-row-operations a {*/
    /*    margin-right: 8px;*/
    /*}*/
    /*/deep/ .ant-table-thead > tr > th,/deep/ .ant-table-tbody > tr > td{*/
    /*    padding: 7px 7px;*/
    /*    text-align: center;*/
    /*}*/
    /*/deep/ .ant-table-pagination.ant-pagination{float: left;}*/
    /*/deep/ .ant-pagination-item-active{*/
    /*    background-color: #1890ff;*/
    /*    color: white;*/
    /*    font-weight: 800;*/
    /*}*/
    /*/deep/ .ant-pagination-item-active a{color: white;}*/
    /*/deep/ .ant-table-thead > tr > th{background-color: #BFE6D7;}*/
</style>