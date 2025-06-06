import { Icon } from '@rsuite/icons';
import { useEffect, useState, type ReactNode } from "react";
import { FaReact, FaSignInAlt } from 'react-icons/fa';
import {
    MdAssignment,
    MdDashboard,
    MdKeyboardArrowLeft,
    MdOutlineKeyboardArrowRight
} from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
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
import { formatName } from '../utils/formatName';
import styles from "./styles.module.scss";

interface LayoutProps {
    children?: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const [expand, setExpand] = useState(true);
    const [showText, setShowText] = useState(false);

    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;

        if (expand) {
            timeout = setTimeout(() => {
                setShowText(true);
            }, 100);
        } else {
            setShowText(false);
        }

        return () => clearTimeout(timeout);
    }, [expand]);

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
                            {/* @ts-ignore */}
                            <HStack align="center" justify="start" spacing={10}>
                                <FaReact size={24} />
                                {showText && <Text>Sistema Base</Text>}
                            </HStack>
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
                            <Breadcrumb.Item as={Link} to="/dashboard">
                                Dashboard
                            </Breadcrumb.Item>
                            {pathnames.map((name, index) => {
                                const routeTo = '/' + pathnames.slice(0, index + 1).join('/');
                                const isLast = index === pathnames.length - 1;
                                return isLast ? (
                                    <Breadcrumb.Item key={name} active>
                                        {formatName(name)}
                                    </Breadcrumb.Item>
                                ) : (
                                    <Breadcrumb.Item key={name} as={Link} to={routeTo}>
                                        {formatName(name)}
                                    </Breadcrumb.Item>
                                );
                            })}
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