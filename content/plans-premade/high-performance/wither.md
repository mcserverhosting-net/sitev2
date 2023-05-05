---
title: "Wither"
draft: false
category: "High Performance"
weight: 2

product:
  id: "wither"
  name: "Wither"
  price: "16.80"

  customFields:
    - name: "RAM"
      type: "readonly"
      value: "4 GiB"

    - name: "Storage"
      type: "readonly"
      value: "40 GiB"

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
      itemPrice: 16.80
---