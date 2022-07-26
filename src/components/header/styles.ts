import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    padding: 32px;
    margin-bottom: 32px;
    background-color: transparent;

    .navigation {
        display: flex;
        
        @media (max-width: 600px) {
            ul {
            display: flex;

                li {
                    display: flex;
                    list-style-type: none;

                    a {
                        text-decoration: none;
                        color: #fff;
                        font-size: 22px;
                    }
                }
            }
        }

        ul {
            display: flex;
            gap: 32px;

            li {
                display: flex;
                list-style-type: none;
                align-items: center;

                a {
                    text-decoration: none;
                    color: #fff;
                    font-size: 22px;
                }
            }
        }
    }
`;