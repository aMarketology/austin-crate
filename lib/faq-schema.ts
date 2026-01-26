// FAQ Schema for common shipping questions

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What areas does Austin Crate & Freight serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We serve Austin, Round Rock, Cedar Park, Georgetown, Pflugerville, and all of Central Texas. We also coordinate national and international shipments for specialty items.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you provide custom crating services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we specialize in custom crating for fine art, antiques, furniture, and medical equipment. Our crates are built to museum-quality standards and designed for each item\'s specific dimensions and fragility requirements.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is my shipment insured?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we offer comprehensive insurance coverage for all shipments. We work with specialized fine art and high-value item insurers to ensure your items are fully protected during transport.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do I get a shipping quote?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Call us at (512) 240-9818 or fill out our online contact form with details about your item (dimensions, weight, pickup/delivery locations). We provide free, detailed quotes within 24 hours.'
      }
    },
    {
      '@type': 'Question',
      name: 'What makes your service "white-glove"?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'White-glove service means professional handling at every step: custom crating, protective wrapping, climate-controlled transport, inside delivery, unpacking, assembly/installation, and debris removal. We treat every item with museum-quality care.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can you ship temperature-sensitive items?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we have climate-controlled trucks for temperature and humidity-sensitive items including fine art, antiques, wine collections, and certain medical equipment. We monitor conditions throughout transport.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you handle medical equipment transport?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we specialize in HIPAA-compliant medical equipment transport including diagnostic imaging equipment, laboratory instruments, and sensitive medical devices. We provide chain-of-custody documentation and calibration protection.'
      }
    },
    {
      '@type': 'Question',
      name: 'How far in advance should I book shipping?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For local moves, we can often accommodate requests within 3-5 business days. For long-distance or complex shipments requiring custom crating, we recommend booking 1-2 weeks in advance. Rush services are available.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you disassemble and reassemble furniture?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, our team is experienced in disassembling, transporting, and reassembling luxury and designer furniture. We document the process and use appropriate tools to ensure your furniture is handled correctly.'
      }
    },
    {
      '@type': 'Question',
      name: 'What documentation do you provide for medical equipment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We provide complete chain-of-custody documentation, transport logs, temperature monitoring reports (if applicable), condition reports, and HIPAA-compliant shipping records for all medical equipment transports.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can you ship internationally?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we coordinate international shipments for fine art, furniture, and specialty items. We handle customs documentation, crating to international standards, and work with trusted international carriers and freight forwarders.'
      }
    },
    {
      '@type': 'Question',
      name: 'What payment methods do you accept?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We accept credit cards (Visa, MasterCard, American Express), checks, wire transfers, and ACH payments. For commercial clients, we offer net-30 payment terms with approved credit.'
      }
    }
  ]
}

export const fineArtFAQSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do you protect artwork during shipping?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We use museum-quality materials including acid-free paper, custom-fitted crates, foam padding, and climate-controlled transport. Each piece is individually assessed and packed to museum standards with corner protection and shock absorption.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can you handle large sculptures and installations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we regularly transport large sculptures, installations, and oversized artwork. Our team has experience with complex rigging, specialized equipment, and coordination for large-scale art projects.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you work with galleries and museums?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we work extensively with art galleries, museums, auction houses, and private collectors. We understand gallery schedules, exhibition deadlines, and museum standards for art handling and documentation.'
      }
    }
  ]
}

export const furnitureFAQSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do you protect furniture from scratches and damage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We use furniture blankets, stretch wrap, corner protectors, and custom crating when needed. All surfaces are covered, and pieces are secured to prevent shifting during transport. We offer a scratch-free guarantee.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can you handle antique furniture?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we specialize in antique and vintage furniture transport. Our team is trained in period furniture construction, proper handling techniques, and restoration-friendly disassembly methods.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you provide storage options?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we offer climate-controlled storage for furniture in our secure facility. This is ideal for staging between homes or when delivery dates don\'t align with moving schedules.'
      }
    }
  ]
}

export const medicalFAQSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Are you HIPAA compliant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, all our medical equipment transport services are HIPAA compliant. Our staff is trained in patient privacy requirements, and we maintain secure chain-of-custody documentation.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can you transport MRI machines and CT scanners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we have experience transporting diagnostic imaging equipment including MRI machines, CT scanners, X-ray equipment, and ultrasound systems. We coordinate with manufacturers for proper disconnection and reinstallation.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you handle calibration-sensitive equipment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we take special precautions with calibration-sensitive medical and laboratory equipment. We use shock-absorbing packaging, secure mounting, and smooth transport to minimize any impact on device calibration.'
      }
    }
  ]
}
