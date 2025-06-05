import { Icon } from '@rsuite/icons';
import { useState, type ReactNode } from "react";
import { FaReact, FaSignInAlt } from 'react-icons/fa';
import {
    MdAssignment,
    MdDashboard,
    MdKeyboardArrowLeft,
    MdOutlineKeyboardArrowRight
} from 'react-icons/md';
import { Link } from 'react-router-dom';
import {
    Breadcrumb,
    Container,
    Content,
    Header,
    HStack,
    IconButton,
    Nav,
    Sidebar,
    Sidenav,
    Stack,
    Text
} from 'rsuite';
import styles from "./styles.module.scss";

interface LayoutProps {
    children?: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const [expand, setExpand] = useState(true);

    return (
        <>
            <Container className={styles.container}>
                <Sidebar
                    style={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'space-between' }}
                    width={expand ? 220 : 56}
                    collapsible
                >
                    <div>
                        <Sidenav.Header className={styles.sidenavHeader}>
                            <Brand expand={expand} />
                        </Sidenav.Header>

                        <Sidenav expanded={expand} appearance="subtle">
                            <Sidenav.Body>
                                <Nav defaultActiveKey="1">
                                    <Nav.Item eventKey="1" icon={<Icon as={MdDashboard} />} as={Link} to="/dashboard">
                                        Dashboard
                                    </Nav.Item>
                                    <Nav.Item eventKey="2" icon={<Icon as={FaSignInAlt} />} as={Link} to="/">
                                        Login
                                    </Nav.Item>
                                    <Nav.Menu
                                        eventKey="3"
                                        trigger="hover"
                                        title="Cadastros"
                                        icon={<Icon as={MdAssignment} />}
                                        placement="rightStart"
                                    >
                                        <Nav.Item eventKey="3-1" as={Link} to="/users">Usuários</Nav.Item>
                                        {/* <Nav.Item eventKey="3-2">Devices</Nav.Item>
                                        <Nav.Item eventKey="3-3">Brand</Nav.Item>
                                        <Nav.Item eventKey="3-4">Loyalty</Nav.Item>
                                        <Nav.Item eventKey="3-5">Visit Depth</Nav.Item> */}
                                    </Nav.Menu>
                                    {/* <Nav.Menu
                                        eventKey="4"
                                        trigger="hover"
                                        title="Configurações"
                                        icon={<Icon as={MdSettings} />}
                                        placement="rightStart"
                                    >
                                        <Nav.Item eventKey="4-1">Applications</Nav.Item>
                                        <Nav.Item eventKey="4-2">Websites</Nav.Item>
                                        <Nav.Item eventKey="4-3">Channels</Nav.Item>
                                        <Nav.Item eventKey="4-4">Tags</Nav.Item>
                                        <Nav.Item eventKey="4-5">Versions</Nav.Item>
                                    </Nav.Menu> */}
                                </Nav>
                            </Sidenav.Body>
                        </Sidenav>
                    </div>

                    <NavToggle expand={expand} onChange={() => setExpand(!expand)} />
                </Sidebar>


                <Container className={styles.mainContent}>
                    <Header className={styles.header}>
                        <Breadcrumb className={styles.breadcrumb}>
                            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="##">Dashboard</Breadcrumb.Item>
                            <Breadcrumb.Item active>Overview</Breadcrumb.Item>
                        </Breadcrumb>
                    </Header>

                    <Content className={styles.content}>
                        {children}
                    </Content>
                </Container>
            </Container>
        </>
    )
}

const NavToggle = ({ expand, onChange }: any) => {
    return (
        <Stack className="nav-toggle" justifyContent={expand ? 'flex-end' : 'center'}>
            <IconButton
                onClick={onChange}
                appearance="subtle"
                size="lg"
                icon={expand ? <MdKeyboardArrowLeft /> : <MdOutlineKeyboardArrowRight />}
            />
        </Stack>
    );
};

const Brand = ({ expand }: any) => {
    return (
        <HStack className="page-brand" spacing={12}>
            <FaReact size={26} />
            {expand && <Text>Brand</Text>}
        </HStack>
    );
};