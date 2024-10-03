import styled from "styled-components";

export const CardContainer = styled.div`
	background-color: #fff;
	width: 85%;
	max-width: 300px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	border-radius: 12px;
	margin: auto;
	box-shadow: 0px 6px 31px -1px rgba(135, 153, 207, 0.5);
`;

export const ProceedButton = styled.button`
	background-color: #382ae1;
	color: white;
	font-size: 12px;
	font-weight: bold;
	border: none;
	padding: 10px 50px;
	margin: 15px;
	border-radius: 8px;
	cursor: pointer;
	transition: background-color 0.3s ease;
	box-shadow: 0px 6px 31px -1px rgba(135, 153, 207, 0.5);

	&:hover {
		background-color: #766cf1;
	}
`;

export const CancelLink = styled.a`
	color: grey;
	text-decoration: none;
	font-size: 12px;
	font-weight: bold;
	margin: 15px;
	display: inline-block;

	&:hover {
		text-decoration: none;
		color: black;
	}
`;
