// 1. Qué problemas detectas en la operación y razona la respuesta
// Referirse a README.md

// 2. Propón una solución alternativa

class Service {
	getMultimediaContent() {
		/* ... */

		return multimediaContent;
	}
}

class StreamingService extends Service {
	getPrice() {
		const multimediaContent = this.getMultimediaContent();

		if (typeof multimediaContent === PremiumContent) {
			return multimediaContent.streamingPrice + multimediaContent.additionalFee;
		}

		return multimediaContent.streamingPrice;
	}
}

class DownloadService extends Service {
	getPrice() {
		const multimediaContent = this.getMultimediaContent();

		if (typeof multimediaContent === PremiumContent) {
			return multimediaContent.downloadPrice + multimediaContent.additionalFee;
		}

		return multimediaContent.downloadPrice;
	}
}

class RegisteredUser {
	getTotal(services = []) {
		return services.reduce((total, service) => total + service.getPrice(), 0);
	}
}
