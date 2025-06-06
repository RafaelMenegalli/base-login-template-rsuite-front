import PlusIcon from '@rsuite/icons/Plus'
import { useState } from "react"
import { Button, Divider, IconButton, Input, InputGroup, Pagination, Table } from "rsuite"
import styles from "./styles.module.scss"
import SearchIcon from '@rsuite/icons/Search'
import { AddUserModal } from './add'
import { FaEdit } from 'react-icons/fa'

const { Column, Cell, HeaderCell } = Table

const defaultData = [
    { id: 1, name: 'Rafael', email: 'rafael@gmail.com', active: true },
]

export default function Users() {
    const [filter, setFilter] = useState<string>("");
    const [isAddModalVisibel, setIsAddModalVisibel] = useState<boolean>(false);

    //Pagination inicio
    const [limit, setLimit] = useState<number>(10);
    const [page, setPage] = useState<number>(1);

    const handleChangeLimit = (dataKey: any) => {
        setPage(1);
        setLimit(dataKey);
    };

    const data = defaultData.filter((_, i) => {
        const start = limit * (page - 1);
        const end = start + limit;
        return i >= start && i < end;
    });
    // Pagination Final

    const handleOpenAddModal = () => {
        setIsAddModalVisibel(true)
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.actionBar}>
                    <div className={styles.filter}>
                        <InputGroup className={styles.inputFilter}>
                            <Input
                                placeholder='Pesquise por qualquer coisa...'
                                value={filter}
                                onChange={(v) => setFilter(v)}
                            />
                            <InputGroup.Button>
                                <SearchIcon />
                            </InputGroup.Button>
                        </InputGroup>
                    </div>

                    <IconButton
                        icon={<PlusIcon />}
                        appearance="primary"
                        color="green"
                        onClick={handleOpenAddModal}
                    ></IconButton>
                </div>

                <Divider />

                <div className={styles.table}>
                    <Table
                        height={400}
                        data={data}
                        hover
                        showHeader
                        bordered
                        cellBordered
                    >
                        <Column width={70} align="center" fixed resizable>
                            <HeaderCell>ID</HeaderCell>
                            <Cell dataKey="id" />
                        </Column>

                        <Column flexGrow={1} resizable>
                            <HeaderCell>Nome</HeaderCell>
                            <Cell dataKey="name" />
                        </Column>

                        <Column flexGrow={1} resizable>
                            <HeaderCell>Email</HeaderCell>
                            <Cell dataKey="email" />
                        </Column>

                        <Column width={75} align="center" resizable>
                            <HeaderCell>Status</HeaderCell>

                            <Cell>
                                {rowData => (
                                    <span>{rowData.active ? "Sim" : "Não"}</span>
                                )}
                            </Cell>
                        </Column>

                        <Column width={100} align="center" fixed="right">
                            <HeaderCell>Ações</HeaderCell>
                            <Cell>
                                {rowData => (
                                    <Button
                                        size="xs"
                                        appearance="link"
                                        onClick={() => console.log(rowData)}
                                    >
                                        <FaEdit style={{ marginRight: 4 }} />
                                        Editar
                                    </Button>
                                )}
                            </Cell>
                        </Column>
                    </Table>

                    <div style={{ padding: 20 }}>
                        <Pagination
                            prev
                            next
                            first
                            last
                            ellipsis
                            boundaryLinks
                            maxButtons={5}
                            size="xs"
                            layout={['total', '-', 'limit', '|', 'pager', 'skip']}
                            total={defaultData.length}
                            limitOptions={[10, 30, 50]}
                            limit={limit}
                            activePage={page}
                            onChangePage={setPage}
                            onChangeLimit={handleChangeLimit}
                        />
                    </div>
                </div>
            </div>

            <AddUserModal
                open={isAddModalVisibel}
                setOpen={setIsAddModalVisibel}
            />
        </>
    )
}