---
title: "City"
draft: false
category: "General"
weight: 4

product:
  id: "general-city"
  name: "City"
  price: "25.60"

  customFields:
    - name: "RAM"
      type: "readonly"
      value: "8 GiB"

    - name: "Storage"
      type: "readonly"
      value: "50 GiB"

    - name: "nodemodel"
      type: "readonly"
      value: "m2"

    - name: "database"
      type: "readonly"
      value: 1

    - name: "snapshots"
      type: "readonly"
      value: 10
      
    - name: "allocations"
      type: "readonly"
      value: 10
      
    - name: "servertype"
      options: "vanilla|paper|fabric|spongevanilla|forge"


  selectedPlan: "monthly-plan"

  availablePlans:
    - id: "monthly-plan"
      name: "Monthly Subscription"
      frequency: "monthly"
      interval: 1
      itemPrice: 25.60
---
