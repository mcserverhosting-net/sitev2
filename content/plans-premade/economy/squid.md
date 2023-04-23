---
title: "squid"
draft: false
category: "Economy"
weight: 5

product:
  id: "squid"
  name: "Squid"
  price: "12.50"

  customFields:
    - name: "RAM"
      type: "readonly"
      value: "10 GB"

    - name: "Storage"
      type: "readonly"
      value: "100GB"

  selectedPlan: "monthly-plan"

  availablePlans:
    - id: "monthly-plan"
      name: "Monthly Subscription"
      frequency: "monthly"
      interval: 1
      itemPrice: 12.50
---