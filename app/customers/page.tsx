import type { Metadata } from 'next';
import CustomersClient from './CustomersClient';

export const metadata: Metadata = {
    title: 'Client Outcomes & Case Studies | ApexOne Studios',
    description: 'Explore real-world client case studies and verifiable revenue metrics achieved using the ApexOne AI Operating System.',
};

export default function CustomersPage() {
    return <CustomersClient />;
}
