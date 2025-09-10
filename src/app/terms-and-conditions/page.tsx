import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const dynamic = "force-static";

export default function TermsAndConditionsPage() {
  return (
    <div className="container py-12 md:py-16">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Terms and Conditions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <h2 className="text-2xl font-semibold text-foreground">
            STANDARD TERMS AND CONDITIONS OF SALE
          </h2>
          <p className="italic">
            You should update this document to reflect your T&amp;C.
          </p>
          <p className="italic text-sm">
            Below text serves as a suggestion and doesn’t engage Odoo S.A.
            responsibility.
          </p>

          <p>
            The client explicitly waives its own standard terms and conditions,
            even if these were drawn up after these standard terms and conditions
            of sale. In order to be valid, any derogation must be expressly
            agreed to in advance in writing.
          </p>

          <p>
            Our invoices are payable within 21 working days, unless another
            payment timeframe is indicated on either the invoice or the order. In
            the event of non-payment by the due date, My Company reserves the
            right to request a fixed interest payment amounting to 10% of the sum
            remaining due. My Company will be authorized to suspend any provision
            of services without prior warning in the event of late payment.
          </p>

          <p>
            If a payment is still outstanding more than sixty (60) days after the
            due payment date, My Company reserves the right to call on the
            services of a debt recovery company. All legal expenses will be
            payable by the client.
          </p>

          <p>
            Certain countries apply withholding at source on the amount of
            invoices, in accordance with their internal legislation. Any
            withholding at source will be paid by the client to the tax
            authorities. Under no circumstances can My Company become involved in
            costs related to a country's legislation. The amount of the invoice
            will therefore be due to My Company in its entirety and does not
            include any costs relating to the legislation of the country in which
            the client is located.
          </p>

          <p>
            My Company undertakes to do its best to supply performant services in
            due time in accordance with the agreed timeframes. However, none of
            its obligations can be considered as being an obligation to achieve
            results. My Company cannot under any circumstances, be required by
            the client to appear as a third party in the context of any claim for
            damages filed against the client by an end consumer.
          </p>

          <p>
            In order for it to be admissible, My Company must be notified of any
            claim by means of a letter sent by recorded delivery to its
            registered office within 8 days of the delivery of the goods or the
            provision of the services.
          </p>

          <p>All our contractual relations will be governed exclusively by law.</p>
        </CardContent>
      </Card>
    </div>
  );
}
