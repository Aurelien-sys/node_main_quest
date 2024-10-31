import "dotenv/config";
import cowsay from "cowsay";

console.log(
	cowsay.say({
		text: `Hello, I am ${process.env.NAME} from ${process.env.CAMPUS}`,
		e: "^^",
		T: "uu",
	}),
);
