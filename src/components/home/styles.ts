import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;

    .content {
        display: flex;
        min-height: 70vh;
        justify-content: center;
        align-items: center;
        gap: 15%;
        flex-wrap: wrap;
        color: #fff;
        margin-bottom: 32px;
    }

    .image {
        z-index: 9999;
        display: flex;
        min-width: 100px;
        max-width: 400px;
        max-height: 400px;
        
        @media (max-width: 892px) {
            margin-bottom: 15%;
        }

        @media (max-width: 450px) {
            max-width: 250px;
            max-height: 250px;
            
            .avatar {
                max-width: 250px;
                max-height: 250px;
                border-radius: 20%;
            }
            margin-bottom: 15%;
        }

        align-items: center;
        justify-content: center;

        background-color: #fff;
        border-radius: 20%;
        box-shadow: 2px 6px 15px 5px #fff;

        .avatar {
            min-height: 100px;
            max-height: 400px;
            border-radius: 20%;
        }

        transition: box-shadow 0.5s ease-in-out;
        &:hover {
            transition: box-shadow 0.5s ease-in-out;
            box-shadow: 2px 6px 15px 5px #1c7ed6;
        }
    }

    .summary {
        display: flex;
        flex-direction: column;
        gap: 15px;
        z-index: 9999;

        .title {
            font-size: 35pt;
            text-shadow: 2px 3px 17px #fff;
            margin-bottom: 10px;
        }

        .description {
            font-size: 15pt;
            text-shadow: 2px 3px 17px #1c7ed6;
            margin-bottom: 10px;
        }

        .social-networks {
            display: flex;
            gap: 15px;

            .social {
                width: 30px;
                height: 30px;
                filter: drop-shadow(0 0 0.75rem #fff);

                &:hover {
                    filter: drop-shadow(0 0 0.5rem #1c7ed6);
                    transition: filter 0.5s ease-in-out;
                }
            }
        }
    }

    .arrow-down-btn {
        display: flex;
        justify-content: center;
        outline: none;
        background: transparent;
        border: none;
        cursor: pointer;

        filter: drop-shadow(0 0 0.75rem #fff);

        &:hover {
            filter: drop-shadow(0 0 0.5rem #1c7ed6);
            transition: filter 0.5s ease-in-out;
        }
    }
`;