
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PrivacyPolicyPage() {
  return (
    <div className="container py-12 md:py-16">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>This privacy policy sets out how SAA Enterprises uses and protects any information that you give SAA Enterprises when you use this website. SAA Enterprises is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this privacy statement.</p>
          
          <h2 className="text-xl font-semibold text-foreground pt-4">What we collect</h2>
          <p>We may collect the following information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name and job title</li>
            <li>Contact information including email address</li>
            <li>Demographic information such as postcode, preferences and interests</li>
            <li>Other information relevant to customer surveys and/or offers</li>
          </ul>

          <h2 className="text-xl font-semibold text-foreground pt-4">What we do with the information we gather</h2>
          <p>We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Internal record keeping.</li>
            <li>We may use the information to improve our products and services.</li>
            <li>We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided.</li>
          </ul>

          <h2 className="text-xl font-semibold text-foreground pt-4">Security</h2>
          <p>We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.</p>
        </CardContent>
      </Card>
    </div>
  );
}
