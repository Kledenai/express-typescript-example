import {
	cleanEnv, port,
} from 'envalid'

function validateEnv() {
	cleanEnv(process.env, {
		PORT: port({ default: 3333 }),
	})
}

export default validateEnv;
