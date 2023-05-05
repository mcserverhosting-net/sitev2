---
title: "sheep"
draft: false
category: "Economy"
weight: 4

product:
  id: "sheep"
  name: "Sheep"
  price: "10.00"

  customFields:
    - name: "RAM"
      type: "readonly"
      value: "8 GiB"

    - name: "Storage"
      type: "readonly"
      value: "80 GiB"

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
      options: "vanilla|paper|fabric|spongevanilla|forge"

  selectedPlan: "monthly-plan"

  availablePlans:
    - id: "monthly-plan"
      name: "Monthly Subscription"
      frequency: "monthly"
      interval: 1
      itemPrice: 10.00
---

