---
title: "Village"
draft: false
category: "General"
weight: 2

product:
  id: "general-village"
  name: "Village"
  price: "12.80"

  customFields:
    - name: "RAM"
      type: "readonly"
      value: "4 GB"

    - name: "Storage"
      type: "readonly"
      value: "20GB"

    - name: "nodemodel"
      type: "readonly"
      value: "m1"

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
      value: "vanilla|paper|fabric|spongevanilla|forge"


  selectedPlan: "monthly-plan"

  availablePlans:
    - id: "monthly-plan"
      name: "Monthly Subscription"
      frequency: "monthly"
      interval: 1
      itemPrice: 12.80
---
