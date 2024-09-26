interface GoogleMapsLinkProps {
  address: string;
  children: React.ReactNode;
}

const GoogleMapsLink = ({ address, children }: GoogleMapsLinkProps) => {
  const generateGoogleMapsUrl = (address:string) => {
    const encodedAddress = encodeURIComponent(address);
    return `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
  };

  return (
    <a href={generateGoogleMapsUrl(address)} target="_blank" rel="noopener noreferrer" className="self-center">
      {children}
    </a>
  );
};

export default GoogleMapsLink;
