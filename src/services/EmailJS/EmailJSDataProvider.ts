import { serviceId, templateId, userId } from "./EmailJSDataProvider.config";

export class EmailJSDataProvider {

    private static _apiUrl = "https://api.emailjs.com/api/v1.0/email/send";
    private static _serviceId = serviceId;
    private static _templateId = templateId;
    private static _userId = userId;

    public template_params: null;

    public static async sendEmail(data: any) {
        const templateParams = {
            from_name: data.name,
            to_name: "Casella Clínica Dental",
            message: data.message,
            reply_to: data.email,
            phone: data.phone,
            service: data.service,
            date: data.date,
        };

        const response = await fetch(EmailJSDataProvider._apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${EmailJSDataProvider._userId}`,
            },
            body: JSON.stringify({
                service_id: EmailJSDataProvider._serviceId,
                template_id: EmailJSDataProvider._templateId,
                user_id: EmailJSDataProvider._userId,
                template_params: templateParams,
            }),
        });

        return response;
    }

}