import { Pagination, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { useFetchData } from "../../hooks/useFetchData";
import MetaHeader from "../../components/MetaHeader";

interface Photo {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
export default function PostIndex() {
  const { data, loading, setPage, setPageSize, total } =
    useFetchData<Photo>("photos");

  const columns: ColumnsType<Photo> = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Album Id",
      dataIndex: "albumId",
    },
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Image",
      dataIndex: "thumbnailUrl",
      render: (thumbnailUrl: string) => <img src={thumbnailUrl} alt="" />,
    },
  ];

  return (
    <>
      <MetaHeader title="Photo List"></MetaHeader>
      {data && (
        <>
          <Pagination
            defaultCurrent={1}
            total={total}
            onChange={(page, pageSize) => {
              setPage(page);
              setPageSize(pageSize);
            }}
          />
          <Table
            columns={columns}
            dataSource={data}
            loading={loading}
            pagination={false}
          />
        </>
      )}
    </>
  );
}
