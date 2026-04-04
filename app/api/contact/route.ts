import { NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactPayload {
  name: string;
  email: string;
  telephone: string;
  secteur?: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body: ContactPayload = await request.json();

    const errors: string[] = [];

    if (!body.name || body.name.trim().length === 0) {
      errors.push("Le nom est requis.");
    }
    if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      errors.push("Un email valide est requis.");
    }
    if (!body.telephone || body.telephone.trim().length < 8) {
      errors.push("Un numéro de téléphone valide est requis.");
    }
    if (!body.message || body.message.trim().length < 10) {
      errors.push("Le message doit contenir au moins 10 caractères.");
    }

    if (errors.length > 0) {
      return NextResponse.json(
        { success: false, message: "Erreurs de validation", errors },
        { status: 400 }
      );
    }

    const contactEmail = process.env.CONTACT_EMAIL || "contact@purlead.fr";

    await resend.emails.send({
      from: "Purlead Contact <onboarding@resend.dev>",
      to: contactEmail,
      subject: `Nouveau lead — ${body.name} (${body.secteur || "Non précisé"})`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #3B82F6; margin-bottom: 24px;">Nouveau message de contact — Purlead</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; width: 140px;">Nom</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">${body.name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">${body.email}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600;">Téléphone</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">${body.telephone}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600;">Secteur</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">${body.secteur || "Non précisé"}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; font-weight: 600; vertical-align: top;">Message</td>
              <td style="padding: 12px 0; white-space: pre-wrap;">${body.message}</td>
            </tr>
          </table>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "Erreur serveur. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
