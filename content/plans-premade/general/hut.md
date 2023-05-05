---
title: "Hut"
draft: false
category: "General"
weight: 1

product:
  id: "general-hut"
  name: "Hut"
  price: "6.40"

  customFields:
    - name: "RAM"
      type: "readonly"
      value: "2 GB"

    - name: "Storage"
      type: "readonly"
      value: "10GB"

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
      itemPrice: 6.4
---
