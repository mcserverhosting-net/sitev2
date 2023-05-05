---
title: "Country"
draft: false
category: "General"
weight: 6

product:
  id: "general-country"
  name: "Hut"
  price: "38.40"

  customFields:
    - name: "RAM"
      type: "readonly"
      value: "12 GB"

    - name: "Storage"
      type: "readonly"
      value: "100GB"

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
      itemPrice: 38.4
---
