---
title: "Blaze"
draft: false
category: "High Performance"
weight: 4

product:
  id: "blaze"
  name: "Blaze"
  price: "33.60"

  customFields:
    - name: "RAM"
      type: "readonly"
      value: "8 GB"

    - name: "Storage"
      type: "readonly"
      value: "80GB"

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
      itemPrice: 33.60
---