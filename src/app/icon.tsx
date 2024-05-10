import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
	width: 32,
	height: 32,
};
export const contentType = "image/png";

export default function Icon() {
	return new ImageResponse(
		(
			<div
				style={{
					width: "32",
					height: "32",
					backgroundColor: "black",
					color: "white",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					fontSize: "20px",
					fontWeight: "bold",
					borderRadius: "50%",
					boxShadow:
						"0 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
					transition: "all 0.2s ease-in-out",
					cursor: "pointer",
					userSelect: "none",
				}}>
				NJ
			</div>
		),
		{ ...size }
	);
}
