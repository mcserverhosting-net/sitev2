---
title: "chicken"
draft: false
category: "Economy"
weight: 1

product:
  id: "chicken"
  name: "Chicken"
  price: "2.50"

  customFields:
    - name: "RAM"
      type: "readonly"
      value: "2 GB"

    - name: "Storage"
      type: "readonly"
      value: "20GB"

  selectedPlan: "monthly-plan"

  availablePlans:
    - id: "monthly-plan"
      name: "Monthly Subscription"
      frequency: "monthly"
      interval: 1
      itemPrice: 2.50
---
